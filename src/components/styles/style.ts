interface StyleProps {
    [key: string]: React.CSSProperties
}

const style: StyleProps = {
    tree: {
        padding: '0 0 0 1.2em',
    },
    listStyle: {
        padding: '0 0 0 1em',
    },
    listStyle2: {
        padding: '0 0 0 1em',
        display: 'none',
    },
    nodeWrapper: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    nodeStyle: {
        listStyleType: 'none',
        cursor: 'default',
        padding: '0.15em 0',
        display: 'flex',
        gap: '0.35em',
        width: 'fit-content',
        position: 'relative',
    },
    icon: {
        width: '20px',
        height: '20px',
    },
    arrowRight: {
        width: '9px',
        pointerEvents: 'none',
    },
    arrowDown: {
        width: '9px',
        transform: 'rotate(90deg)',
        pointerEvents: 'none',
    },
    iconBoxWidth: {
        width: '23px',
    },
    nodeText: {
        lineHeight: '23px',
        display: 'inline-block',
    },
    arrowBoxWidth: {
        width: '19px',
        position: 'absolute',
        left: '-18px',
    },
    dots: {
        padding: 0,
        marginLeft: '1em',
        border: 'none',
        boxShadow: 'none',
        background: 'none',
        visibility: 'hidden',
    },
    options: {
        display: 'none',
        flexDirection: 'column',
        position: 'absolute',
        right: 0,
        top: '100%',
        background: 'red',
        padding: '0.5em',
        gap: '0.25em',
        borderRadius: '3px',
        border: '1.5px solid rgba(0,0,0,0.5)',
        zIndex: 1
    }
}

export default style