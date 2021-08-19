import { useMemo } from "react";


export const useSortedPosts = (posts, sort) => {

	const sortedPosts = useMemo(() => {
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		} else {
			return posts
		}
	}, [sort, posts])

	return sortedPosts;
}

export const usePost = (posts, query, sort) => {

	const sortedPosts = useSortedPosts(posts, sort)

	const sortedAndSearchPost = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	}, [query, sortedPosts])

	return sortedAndSearchPost;
}