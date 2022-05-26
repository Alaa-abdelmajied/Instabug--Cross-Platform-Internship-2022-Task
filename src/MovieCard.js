import React, { memo } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const MovieCard = (props) => {
    return (
        <View style={styles.movieCard}>
            <View style={styles.header}>
                <Text style={styles.titleText}>{props.item.original_title}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.content}>
                    <Text style={styles.overview}>{props.item.overview}</Text>
                    <View style={styles.relaseDateContainer}>
                        <Text style={styles.relaseDateTitle}>Realse Date:</Text>
                        <Text style={styles.relaseDate}>{props.item.release_date}</Text>
                    </View>
                </View>
                <Image
                    style={styles.image}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500/${props.item.poster_path}`,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    movieCard: {
        flexDirection: 'column',
        width: '95%',
        // height: 200,
        borderRadius: 15,
        backgroundColor: '#fff',
        alignSelf: 'center',
        margin: 4,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 2,
        overflow: 'hidden',
    },
    header: {
        backgroundColor: "#03a9fc"
    },
    titleText: {
        color: '#000',
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    body: {
        marginLeft: 5,
        flexDirection: 'row'
    },
    content: {
        flex: 3,
        flexDirection: 'column'
    },
    overview: {
        fontSize: 14,
        color: "#000",
        margin: 5,
        marginRight: 0
    },
    relaseDateContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        marginBottom: 10,
    },
    relaseDateTitle: {
        // marginLeft: 5,
        // marginBottom: 10,
        fontWeight: 'bold',
        color: "#0394fc"
    },
    relaseDate: {
        marginLeft: 5,
        marginBottom: 10,
        color: "#000"
    },
    image: {
        flex: 1,
        margin: 5,
        width: 150,
        height: 150,
        borderRadius: 10
        // borderBottomRightRadius: 10,
        // borderBottomLeftRadius: 10

    }
});

export default memo(MovieCard);
