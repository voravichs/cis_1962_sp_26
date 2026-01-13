export default function XLink({link, text}: { link: string, text: string }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">{text}</a>
    )
}