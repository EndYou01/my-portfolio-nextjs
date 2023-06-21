
// import { Link, usePathname } from 'next/link'
import Link from 'next/link'
// import { useLocation } from "react-router-dom";
import { useTranslations } from "next-intl";

export const LearnMoreButton = ({ pathname }) => {
    console.log(pathname)
    const t = useTranslations("translation")
    // const location = useLocation()
    // const path = usePathname()

    // localStorage.setItem('lastLocation', path)

    return (
        <Link href={pathname}>
            <button className='learn_more_button'>
                {t("work.lm")}
            </button>
        </Link>
    )
}
