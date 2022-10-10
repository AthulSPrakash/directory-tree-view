interface StyleProps {
    [key: string]: React.CSSProperties
}

const style: StyleProps = {
    paddingLeft: {
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
        padding: '0.125em 0',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '0.35em',
        width: 'fit-content'
    },
    icon: {
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
        pointerEvents: 'none'
    },
    nodeText: {
        lineHeight: '23px',
        display: 'inline-block',
        pointerEvents: 'none'
    },
    arrowBoxWidth: {
        width: '19px',
        position: 'absolute',
        left: '-18px',
    },
}

export default style