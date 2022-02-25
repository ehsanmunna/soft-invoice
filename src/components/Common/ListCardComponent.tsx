const ListCard = (props: any) => 
<div style={
    {
        background: '#EBEBEB',
        padding: 15,
        borderRadius: 5
    }
}>
    {props.children}
</div>;

export default ListCard