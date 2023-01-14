// blogs API

import { rootApi } from "../api/rootApi";

export const blogsApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchBlogs: builder.query({
            query: () => '/api/blogs/fetchBlogs',
        }),

        fetchSingleBlog: builder.query({
            query: (blogId) => `/blogs/${blogId}`,
        }),

        // create Blogs
        createBlog: builder.mutation({
            query: (data) => ({
                url: '/api/blogs/addBlog',
                method: 'POST',
                body: data
            }),

            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    const { data: createdBlog } = await queryFulfilled;

                    dispatch(
                        rootApi.util.updateQueryData('fetchBlogs', undefined, (draft) => {
                            draft?.push(createdBlog);
                        })
                    )

                } catch (error) {
                    console.log(error);
                }
            }
        }),

        //delete Blog
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/api/blogs/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {

                    await queryFulfilled;

                    dispatch(
                        rootApi.util.updateQueryData(
                            'fetchBlogs',
                            undefined,
                            (draft) => {
                                return draft.filter(
                                    (blog) => blog?._id !== arg
                                );
                            }
                        )
                    );

                } catch (error) {
                    console.log('error in catch block');
                }
            }
        }),

        // update blog
        updateBlog: builder.mutation({
            query: ({ blogId, data }) => ({
                url: `/blogs/${blogId}/update`,
                method: 'PUT',
                body: data
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    await queryFulfilled;

                    // dispatch(rootApi.util.updateQueryData('fetchSingleVideo', args?.videoId, (draft) => {
                    //     var video = draft;
                    //     Object.assign(video, {
                    //         _id: args?.videoId,
                    //         title: args?.data?.title,
                    //         videoSourceType: args?.data?.videoSourceType,
                    //         category: args?.data?.category,
                    //         description: args?.data?.description,
                    //         thumbnailUrl: args?.data?.thumbnailUrl,
                    //         videoUrl: args?.data?.videoUrl
                    //     });
                    // }));

                    dispatch(
                        rootApi.util.updateQueryData('fetchBlogs', undefined, (draft) => {
                            const blog = draft?.find((blogItem) => blogItem?._id === args?.blogId);
                            blog._id = args?.blogId;
                            blog.blogTitle = args?.data?.blogTitle;
                            blog.blogCategory = args?.data?.blogCategory;
                            blog.blogDescription = args?.data?.blogDescription;
                            blog.blogIsPublished = args?.data?.blogIsPublished ? args?.data?.blogIsPublished : true;
                        })
                    );


                } catch (error) {
                    console.log(error);
                }
            }
        }),

        // search blogs

        searchBlogByTitle: builder.query({
            query: (title) => `/blogs/search/${title}`
        })
    })
})
export const { useCreateBlogMutation, useFetchBlogsQuery, useDeleteBlogMutation } = blogsApi