export const scaleSize = (profile: RequestInitCfPropertiesImage, dpi: string | undefined) => {
    const scale = dpi === '2x' ? 2 : dpi === '3x' ? 3 : 1;

    return {
        width: profile.width && profile.width * scale,
        height: profile.height && profile.height * scale,
    }
};

export const profiles: Record<string, RequestInitCfPropertiesImage> = {
    thumbnail: {
        width: 160,
        height: 160,
        fit: 'cover',
        quality: 80,
        format: 'webp'
    }
};