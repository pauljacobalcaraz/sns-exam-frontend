import { clone, update } from 'lodash';
const accountLocalStore = localStorage.getItem('account')
	? JSON.parse(localStorage.getItem('account'))
	: null; //if there's  signed in account, initialState.accountSignin: acount information else null

const initialState = {
	posts: [],
	comments: [],
	acountSignIn: accountLocalStore,
	popAlert: '',
};

const reducer = (state = initialState, action) => {
	//variables for editing post such as update, like, unlike
	let PostId;
	let filteredPost;
	let posts;
	let newPostsCopy;
	let editedComment;
	let comments;
	let CommentId;
	let newCommentsCopy;
	let filteredComments;
	let toPop;
	switch (action.type) {
		case 'LOGIN':
			localStorage.setItem('account', JSON.stringify(action.payload)); //Signed in Account will save like session
			return {
				...state,
				acountSignIn: action.payload,
			};
		case 'LOGOUT':
			localStorage.removeItem('account');
			return {
				...state,
				acountSignIn: action.payload,
			};
		case 'SET_POSTS':
			return {
				...state,
				posts: action.payload,
			};
		case 'ADD_POST':
			let newPost = action.payload;
			let PostCopy = [...state.posts];
			PostCopy.unshift(newPost);

			toPop = {
				activity: 'Post Added',
				content: action.payload.content,
			}; //display the activity

			return {
				...state,
				posts: PostCopy,
				popAlert: toPop,
			};
		case 'DELETE_POST':
			PostId = action.payload._id;
			filteredPost = state.posts.filter((post) => post._id !== PostId); //remove post from posts[]
			toPop = {
				activity: 'Post Deleted',
				content: action.payload.content,
			}; //display the activity
			return {
				...state,
				posts: filteredPost,
				popAlert: toPop,
			};
		case 'EDIT_POST':
			PostId = action.payload._id;
			let editedPost = action.payload;

			posts = clone(state.posts);
			newPostsCopy = [];

			posts.map((post) =>
				post._id === PostId
					? newPostsCopy.push(editedPost)
					: newPostsCopy.push(post)
			);

			toPop = {
				activity: 'Post Updated',
				content: action.payload.content,
			}; //display the activity

			return {
				...state,
				posts: clone(newPostsCopy),
				popAlert: toPop,
			};
		case 'LIKE_POST':
			console.log(action.payload);
			PostId = action.payload._id;
			let likedPost = action.payload;
			posts = clone(state.posts);
			newPostsCopy = [];

			posts.map((post) =>
				post._id === PostId
					? newPostsCopy.push((post = likedPost))
					: newPostsCopy.push(post)
			);

			return {
				...state,
				posts: clone(newPostsCopy),
			};
		case 'UNLIKE_POST':
			PostId = action.payload._id;
			let unLikedPost = action.payload;

			posts = clone(state.posts);
			newPostsCopy = [];

			posts.map((post) =>
				post._id === PostId
					? newPostsCopy.push((post = unLikedPost))
					: newPostsCopy.push(post)
			);

			return {
				...state,
				posts: clone(newPostsCopy),
			};
		case 'SET_COMMENTS':
			// console.log(action.payload);
			return {
				...state,
				comments: action.payload,
			};
		case 'ADD_COMMENT':
			let newComment = action.payload;
			let CommentCopy = [...state.comments];

			CommentCopy.push(newComment);

			toPop = {
				activity: 'Comment Added',
				content: action.payload.comment,
			}; //display the activity
			return {
				...state,
				comments: CommentCopy,
				popAlert: toPop,
			};

		case 'DELETE_COMMENT':
			CommentId = action.payload._id;
			filteredComments = state.comments.filter(
				(comment) => comment._id !== CommentId
			);
			console.log(action.payload.comment);
			toPop = {
				activity: 'Comment Deleted',
				content: action.payload.comment,
			}; //display the activity
			return {
				...state,
				comments: filteredComments,
				popAlert: toPop,
			};
		case 'EDIT_COMMENT':
			CommentId = action.payload._id;
			editedComment = action.payload;

			comments = clone(state.comments);
			newCommentsCopy = [];
			comments.map((comment) =>
				comment._id === CommentId
					? newCommentsCopy.push(editedComment)
					: newCommentsCopy.push(comment)
			);
			toPop = {
				activity: 'Comment Updated',
				content: action.payload.comment,
			};
			return {
				...state,
				comments: newCommentsCopy,
				popAlert: toPop,
			};
		case 'LIKE_COMMENT':
			CommentId = action.payload._id;
			let likedComment = action.payload;
			comments = clone(state.comments);
			newCommentsCopy = [];

			comments.map((comment) =>
				comment._id === CommentId
					? newCommentsCopy.push((comment = likedComment))
					: newCommentsCopy.push(comment)
			);

			return {
				...state,
				comments: clone(newCommentsCopy),
			};
		case 'UNLIKE_COMMENT':
			CommentId = action.payload._id;
			let unLikedComment = action.payload;
			comments = clone(state.comments);
			newCommentsCopy = [];

			comments.map((comment) =>
				comment._id === CommentId
					? newCommentsCopy.push((comment = unLikedComment))
					: newCommentsCopy.push(comment)
			);

			return {
				...state,
				comments: clone(newCommentsCopy),
			};
		case 'ClEAR_POP':
			return {
				...state,
				popAlert: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
