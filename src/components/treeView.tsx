import React from 'react'
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

const TreeView = ({ treeData, onNameClick, openFolder, skin, color, nodeMenuBtn, openNodeMenu, bgColor }:any) => {
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
                            data-id={data._id}
                            src={require(`./img/folder-${data.isOpen ? 'open-' : '' }${skin && skin==='solid' ? 'solid' : 'regular'}.svg`)}
                            alt="icon"
                            style={Style.icon}
                        />
                        <span 
                            onClick={(e: any) => onNameClick(e, data)} 
                            data-id={data._id}
                            className="node-name-capitalize" 
                            style={Style.nodeText}
                        >
                            {data.name}
                        </span>
                        {nodeMenuBtn===false ? null :
                            <> 
                                <button 
                                    id={`${data._id}+dots`}
                                    data-id={data._id}
                                    onClick={() => openNodeMenu(data)} 
                                    style={Style.dots}
                                >
                                    <img width={20} src={require('./img/dots-h.svg')}/>
                                </button>
                                <div id={`${data._id}-nodeOptions`} style={Style.options}></div>
                            </>
                        }
                    </li>
                </span>
                <ul id={`${data._id}+dir`} key={`${data._id}+dir`} style={data.isOpen ? Style.listStyle : Style.listStyle2}>
                    {data.children.map((i: nodeProps) => {
                        if (i.children) {   // Folder
                            return renderTree(i)
                        } else {    // File
                            const fileType = checkFileType(i.props?.fileType)
                            Style.options.backgroundColor = bgColor && bgColor.length ? bgColor : 'white'
                            return (
                                <span key={i._id}>
                                    <li style={Style.nodeStyle}>
                                        <img
                                            onClick={(e: any) => onNameClick(e, i)}
                                            data-id={i._id}
                                            src={require(`./img/${fileType}-${skin && skin === 'solid' ? 'solid' : 'regular'}.svg`)}
                                            style={Style.icon}
                                            alt="icon"
                                        />
                                        <span 
                                            onClick={(e: any) => onNameClick(e, i)}
                                            data-id={i._id} 
                                            className="node-name-capitalize" 
                                            style={Style.nodeText}
                                        >
                                            {i.name}
                                        </span>
                                        {nodeMenuBtn===false ? null :
                                            <> 
                                                <button 
                                                    id={`${i._id}+dots`}
                                                    data-id={i._id}
                                                    onClick={() => openNodeMenu(i)}
                                                    style={Style.dots}
                                                >
                                                    <img width={20} src={require('./img/dots-h.svg')}/>
                                                </button>
                                                <div id={`${i._id}-nodeOptions`} style={Style.options}></div>
                                            </>
                                        }
                                    </li>
                                </span>
                            )
                        }
                    })}
                </ul>
            </React.Fragment>
        )
    }
    Style.tree.backgroundColor = bgColor && bgColor.length ? bgColor : 'white'
    return (
        <ul style={Style.tree}>
            {renderTree(treeData)}
        </ul>
    )
}

export default TreeView