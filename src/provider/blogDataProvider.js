import axios from 'axios'

const loadPostByMonth = (month) => {
    return [
        new Post({ title: '제목', content: '내용' })
    ]
};

export default function blogDataProvider(Component) {

    return class Blog extends React.Component {

        constructor() {
            this.state = {
                posts: loadPostByMonth(new Date())
            }
        }

        render() {
            return (
                <Component {...this.props} blogData={this.state} />
            )
        }
    }

}