import { Helmet } from "react-helmet";

const MetaHeader = ({
  title = "Lomads",
  description = "Meet the ultimate operations and finance management dashboard for web3 organizations, DAOs and beyond.",
  image,
}) => {
  return (
    <Helmet>
      <meta name="title" property="og:title" content={title} />
      <meta name="description" property="og:description" content={description} />
      <meta name="image" property="og:image" content={image} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />

      <title>
        {title}
      </title>
    </Helmet>
  );
}

export {MetaHeader};