export const highlightText = (text) => {
    const parts = text.split(/(Nowhere\.SG|Wear your confidence)/g);
    return parts.map((part, index) =>
        part === 'Nowhere.SG' || part === 'Wear your confidence' ? (
            <span key={index} style={{ color: 'darkred', fontWeight: 'bold' }}>
                {part}
            </span>
        ) : (
            part
        ),
    );
};
