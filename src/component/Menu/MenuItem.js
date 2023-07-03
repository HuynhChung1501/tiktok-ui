import Button from "../Button";

function MenuItem({ data }) {
    return (
        <Button iconLeft={data.icon} to={data.to}>{data.title}</Button>
    );
}

export default MenuItem;