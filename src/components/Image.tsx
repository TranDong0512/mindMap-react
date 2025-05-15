
interface IImg {
    src: string,
    alt: string,
    width: number,
    height: number
}
const Image = ({ src, alt, width, height }: IImg) => {
    return (
        <img src={src} alt={alt} width={width} height={height}></img>
    )
};


export default Image;
