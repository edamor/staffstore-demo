import NextImage from "next/image"

const Image = (props) => {
  if (!props.media) {
    return <NextImage {...props} />
  }

  const { src, alt, height, width } = props.media

  return (
    <NextImage
      priority={true}
      width={width}
      height={height}
      src={src}
      alt={alt || ""}
    />
  )
}

export default Image
