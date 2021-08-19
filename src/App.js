import { React, useState } from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { usePost } from './hooks/usePosts';
import './style/App.css'

function App() {

	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript', body: 'Description' },
		{ id: 2, title: 'Python', body: 'This dog is very good friend' },
		{ id: 3, title: 'C++', body: 'Of course, I fly every day' },
	])

	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const sortedAndSearchPost = usePost(posts, filter.query, filter.sort)


	const createPost = (post) => {
		setPosts([...posts, post])
		setModal('')
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
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

			<PostList remove={removePost} posts={sortedAndSearchPost} title="Посты про JS" />

		</div>
	);
}

export default App;
