// rfce
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'

function PostList({ posts, title, remove }) {

	if (!posts.length) {
		return (
			<div>
				<h1>Посты не найдены!</h1>
			</div>
		)
	}

	return (
		<div>
			<h1 className="title">{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) =>
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames="post"
					>
						<PostItem remove={remove} post={post} number={index + 1} />
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	)
}

export default PostList
