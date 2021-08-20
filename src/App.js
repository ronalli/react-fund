import { React, useEffect, useState } from 'react'
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';
import MyModal from './components/UI/MyModal/MyModal';
import { usePost } from './hooks/usePosts';
import './style/App.css'

function App() {

	useEffect(() => {
		fetchPosts();
	}, [])

	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [isPostsLoading, setIsPostsLoading] = useState(false)

	const sortedAndSearchPost = usePost(posts, filter.query, filter.sort)

	const createPost = (post) => {
		setPosts([...posts, post])
		setModal('')
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	async function fetchPosts() {
		setIsPostsLoading(true)
		setTimeout(async () => {
			const posts = await PostService.getAll()
			setPosts(posts)
			setIsPostsLoading(false)
		}, 4000)
	}


	return (
		<div className="App">
			<MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
				Добавить пост
			</MyButton>

			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>


			<hr />

			<PostFilter filter={filter} setFilter={setFilter} />

			{isPostsLoading
				? <Loader />
				: <PostList remove={removePost} posts={sortedAndSearchPost} title="Посты про JS" />
			}



		</div>
	);
}

export default App;
