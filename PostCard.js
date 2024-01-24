export default class PostCard extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <View style={StyleSheet.cardContainer}>
                    <View style={StyleSheet.authorNameContainer}>
                        <Text style={styles.authorNameText}>
                            {this.props.post.author}
                        </Text>
                    </View>
                    <Image
                        source={require('../assets/post.jpeg')}
                        style={styles.postImage}
                    />
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionContainer}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
    },
    authorNameContainer: {
        flex: 0.85,
        justifyContent: 'center',
    },
    authorNameText: {
        fontSize: 20
    },
    postImage: {
        marginTop: 10,
        rezideMode: 'contain',
        width: '100%',
        alignSelf: 'center',
        height: 275,
    },
    captionText: {
        paddingTop: 10,
    }
});