import React, { useState, useEffect } from 'react'
import arrow from './img/arrow.svg'
import Style from './styles/style'

interface NodePropProps {
    [key: string]: any
}

interface nodeProps {
    id: number | string,
    name: string,
    children?: object[]
    props?: NodePropProps,
    isOpen?: boolean
}

const TreeView = ({ treeData, onNameClick, openFolder, skin }:any) => {
    const [tree, setTree] = useState<JSX.Element>()
    const fileTypes: string[] = ['audio', 'video', 'image', 'pdf', 'word', 'excel', 'script']
    console.log('treeView')
    const checkFileType = (fileType: string) => {
        if (fileType) {
            if (fileTypes.includes(fileType.toLowerCase())) {
                return fileType.toLowerCase()
            } else return 'file'
        } else return 'file'
    }

    const renderTree = (data: any) => {
        return (
            <React.Fragment key={new Date().valueOf()}>
                <span key={data.id} style={Style.nodeWrapper}>
                    <span style={Style.arrowBoxWidth} onClick={(e: any) => openFolder(e, data)}>
                        <img 
                            id={`${data.id}+arrow`} 
                            style={data.isOpen ? Style.arrowDown : Style.arrowRight} 
                            src={arrow} 
                            alt="arrow" 
                        />
                    </span>
                    <li
                        key={data.id}
                        onClick={(e: any) => onNameClick(e, data)}
                        style={Style.nodeStyle}
                    >
                        <span style={Style.iconBoxWidth}>
                            <img
                                src={require(`./img/folder-${data.isOpen ? 'open-' : '' }${skin && skin==='solid' ? 'solid' : 'regular'}.svg`)}
                                alt="icon"
                                style={Style.icon}
                            />
                        </span>
                        <span className="node-name-capitalize" style={Style.nodeText}>
                            {data.name}
                        </span>
                    </li>
                </span>
                <ul id={`${data.id}+dir`} key={`${data.id}+dir`} style={data.isOpen ? Style.listStyle : Style.listStyle2}>
                    {data.children.map((i: nodeProps) => {
                        if (i.children) {   // Folder
                            return renderTree(i)
                        } else {    // File
                            const fileType = checkFileType(i.props?.fileType)
                            return (
                                <span key={i.id}>
                                    <li onClick={(e: any) => onNameClick(e, i)} style={Style.nodeStyle}>
                                        <span style={Style.iconBoxWidth}>
                                            <img
                                                src={require(`./img/${fileType}-${skin && skin === 'solid' ? 'solid' : 'regular'}.svg`)}
                                                style={Style.icon}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className="node-name-capitalize" style={Style.nodeText}>
                                            {i.name}
                                        </span>
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
        const tempTree:JSX.Element = renderTree(treeData)
        setTree(tempTree)
        // eslint-disable-next-line
    }, [])

    return (
        <ul style={Style.paddingLeft}>
            {tree}
        </ul>
    )
}

export default TreeView