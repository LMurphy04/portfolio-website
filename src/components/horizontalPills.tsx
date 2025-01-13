const HorizontalPills = ({headings} : {headings : string[]}) => {
    return <div
        style={{
        flexDirection: "row",
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        }}
    >
        {
            headings.map((heading, index) => (
                <div 
                style={{
                    padding: '3px 10px',
                    border: "1px solid black",
                    borderColor: "inherit",
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                }}
                key={index}
                >
                    {heading}
                </div>
            ))
        }
    </div>
}

export default HorizontalPills;