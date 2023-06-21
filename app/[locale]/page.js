import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("translation");

    return (
        <div>
            <p>{t("about.a&e")}</p>
        </div>
    )
}
