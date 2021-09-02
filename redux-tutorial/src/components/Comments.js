import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../redux'

const Comments = ({ comments, fetchComments, loading }) => {
    useEffect(() => {
        fetchComments()
    }, [fetchComments])
    const commentsItems = loading ? (<div>is loading...</div>) : (
        comments.map(comment => {
            return (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            )
        })
    )
    return (
        <div class="comments">
            {commentsItems}
        </div>
    )
}

const mapStateToProps = ({ comments }) => {
    return {
        comments: comments.items
    }
}

const mapDispatchToProps = {
    fetchComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
