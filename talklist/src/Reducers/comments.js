// action types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';



// 编写action

export default function (state, action) {
    // 初始化state
    if (!state) {
        state = {
            comments: []
        }
    }

    switch (action.type) {
        case INIT_COMMENTS:
            // 此时为评论初始化
            return {
                comments: action.comments
            };
        case ADD_COMMENT:
            // 新增一条评论
            return {
                comments: [...state.comments, action.comments]
            };
        case DELETE_COMMENT:
            // 删除一条评论
            return {
                comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex + 1)
                ]
            };
        default:
            return state;
    }
}


// 构建dispatch的action creators函数
export const initComments = (comments) => {
    return {
        type: INIT_COMMENTS,
        comments
    }
};

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    };
}

export const deleteComment = (commentIndex) => {
    return {
        type: DELETE_COMMENT,
        commentIndex
    }
}