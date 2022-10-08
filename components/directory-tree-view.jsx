import React, { useState, useEffect } from 'react'
import arrow from './assets/arrow.svg'
import Style from './style.js'

export const DirectoryTreeView = ({ treeData, onNameClick, openFolder, skin }) => {
    const [tree, setTree] = useState([])
    const fileTypes = ['audio', 'video', 'image', 'pdf', 'word', 'excel', 'script']

    const checkFileType = fileType => {
        if (fileType && typeof fileType == 'string') {
            if (fileTypes.includes(fileType.toLowerCase())) {
                return fileType.toLowerCase()
            } else return 'file'
        } else return 'file'
    }

    const renderTree = data => {
        return (
            <React.Fragment key={new Date().valueOf()}>
                <span key={data.id} style={Style.nodeWrapper}>
                    <span style={Style.arrowBoxWidth} onClick={() => openFolder(data)}>
                        <img id={`${data.id}+arrow`} style={data.isOpen ? Style.arrowDown : Style.arrowRight} src={arrow} alt="icon" />
                    </span>
                    <li
                        key={data.id}
                        style={Style.nodeStyle}
                        onClick={e => onNameClick(e.target, data)}
                    >
                        <span style={Style.iconBoxWidth}>
                            <img
                                src={require(`./assets/folder-${skin && skin==='solid' ? 'solid' : 'regular'}.svg`)}
                                alt="icon"
                                style={Style.icon}
                            />
                        </span>
                        <span style={Style.nodeText}>{data.name}</span>
                    </li>
                </span>
                <ul id={`${data.id}+dir`} key={`${data.id}+dir`} style={data.isOpen ? Style.listStyle : Style.listStyle2}>
                    {data.children.map(i => {
                        if (i.children) {   // Folder
                            return renderTree(i)
                        } else {    // File
                            const fileType = checkFileType(i.props.fileType)
                            return (
                                <span key={i.id}>
                                    <li
                                        style={Style.nodeStyle}
                                        onClick={e => onNameClick(e.target, i)}
                                    >
                                        <span style={Style.iconBoxWidth}>
                                            <img
                                                src={require(`./assets/${fileType}-${skin && skin === 'solid' ? 'solid' : 'regular'}.svg`)}
                                                alt="icon"
                                                style={Style.icon}
                                            />
                                        </span>
                                        <span style={Style.nodeText} >{i.name}</span>
                                    </li>
                                </span>
                            )
                        }
                    })}
                </ul>
            </React.Fragment>
        )
    }

    useEffect(() => {
        const tempTree = renderTree(treeData)
        setTree(tempTree)
        // eslint-disable-next-line
    }, [])

    return (
        <ul style={Style.listStyle}>
            {tree}
        </ul>
    )
}

export default DirectoryTreeView
