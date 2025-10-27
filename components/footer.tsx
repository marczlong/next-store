import { APP_NAME } from "@/lib/constants"

const Footer = () => {
  return (
    <footer className="border-t bg-emerald-900 text-white mt-10 text-center">
        <div className="p-5 flex-center">
            {APP_NAME} © {new Date().getFullYear()}
        </div>

    </footer>
  )
}
export default Footer