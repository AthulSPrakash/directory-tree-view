import React, { useState, useEffect } from 'react'
import arrow from './img/arrow.svg'
import Style from './styles/style'

interface NodePropProps {
    [key: string]: any
}

interface nodeProps {
    _id: number | string,
    name: string,
    children?: object[]
    props?: NodePropProps,
    isOpen?: boolean
}

const TreeView = ({ treeData, onNameClick, openFolder, skin, openNodeMenu }:any) => {
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
            <React.Fragment key={`${data._id}-tree`}>
                <span key={data._id} style={Style.nodeWrapper}>
                    <span style={Style.arrowBoxWidth} onClick={(e: any) => openFolder(e, data)}>
                        <img 
                            id={`${data._id}+arrow`} 
                            style={data.isOpen ? Style.arrowDown : Style.arrowRight} 
                            src={arrow} 
                            alt="arrow" 
                        />
                    </span>
                    <li style={Style.nodeStyle}>
                        <img
                            onClick={(e: any) => onNameClick(e, data)}
                            src={require(`./img/folder-${data.isOpen ? 'open-' : '' }${skin && skin==='solid' ? 'solid' : 'regular'}.svg`)}
                            alt="icon"
                            style={Style.icon}
                        />
                        <span onClick={(e: any) => onNameClick(e, data)} className="node-name-capitalize" style={Style.nodeText}>
                            {data.name}
                        </span>
                        <button id={`${data._id}+dots`} onClick={() => openNodeMenu()} style={Style.dots}>
                            <img height={20} src={require('./img/dots-h.svg')}/>
                        </button>
                    </li>
                </span>
                <ul id={`${data._id}+dir`} key={`${data._id}+dir`} style={data.isOpen ? Style.listStyle : Style.listStyle2}>
                    {data.children.map((i: nodeProps) => {
                        if (i.children) {   // Folder
                            return renderTree(i)
                        } else {    // File
                            const fileType = checkFileType(i.props?.fileType)
                            return (
                                <span key={i._id}>
                                    <li style={Style.nodeStyle}>
                                        <img
                                            onClick={(e: any) => onNameClick(e, i)}
                                            src={require(`./img/${fileType}-${skin && skin === 'solid' ? 'solid' : 'regular'}.svg`)}
                                            style={Style.icon}
                                            alt="icon"
                                        />
                                        <span onClick={(e: any) => onNameClick(e, i)} className="node-name-capitalize" style={Style.nodeText}>
                                            {i.name}
                                        </span>
                                        <button id={`${i._id}+dots`} onClick={() => openNodeMenu()} style={Style.dots}>
                                            <img height={20} src={require('./img/dots-h.svg')}/>
                                        </button>
                                    </li>
                                </span>
                            )
                        }
                    })}
                </ul>
            </React.Fragment>
        )
    }

    return (
        <ul style={Style.paddingLeft}>
            {renderTree(treeData)}
        </ul>
    )
}

export default TreeView