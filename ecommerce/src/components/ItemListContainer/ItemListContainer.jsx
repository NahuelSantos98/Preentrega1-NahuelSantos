
const ItemListContainer = (props) => {
    const styles = {color: "white", fontSize: 40, marginTop:40};
    console.log(props)
    console.log(props.greeting)
    return (
        <div>
            <h1 style={styles}>{props.greeting}</h1>
        </div>
    );
};
export default ItemListContainer;
