const Button = ({ link, text, secondary }) => {
  console.log(link)
  return (
    <a className={`py-3 px-14 border border-text border-2 rounded-3xl font-bold text-xl uppercase ${secondary && "bg-text text-bg"}`} href={link.cached_url}>{text}</a>
  )
};

export default Button;
