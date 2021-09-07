const NotFound = () => {
  return <div>Not found</div>
}

export default NotFound

export async function getStaticProps(context) {
  return {
    props: {
      messages: require(`../locales/${context.locale}.json`),
    },
    revalidate: 60,
  }
}
