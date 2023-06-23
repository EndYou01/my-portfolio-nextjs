"use client"

import { useTranslations } from 'next-intl';

interface Props {
    message: string,
}

export const TranslationText = ({ message }: Props) => {

    const t = useTranslations('translation');

    return (
        <>{t(`${message}`)}</>
    )
}