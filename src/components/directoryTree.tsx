import React from 'react'
import TreeView from './treeView'
import './styles/style.css'

interface TreeData {
    _id: number | string,
    name: string,
    children: object[],
    props?: object,
    isOpen: boolean
}

interface Props {
    treeData: TreeData,
    onNodeClick?: any,
    skin?: string,
    nodeMenuBtn?: boolean
}

interface NodeDataProps {
    _id: number | string,
    name: string,
    children?: object[],
    props?: object,
    isOpen?: boolean,
    [key: string]: any
}

const DirectoryTree = ({ treeData, onNodeClick, skin, nodeMenuBtn }: Props) => {

    const openFolder = (event: React.ChangeEvent<HTMLInputElement>, folder: TreeData) => {
        const dir = document.getElementById(`${folder._id}+dir`)!
        const arrow = document.getElementById(`${folder._id}+arrow`)!
        const folderIcon = event.target.parentElement?.lastChild?.firstChild as HTMLImageElement
        if (folder.isOpen) { // Close
            folderIcon.src = require(`./img/folder-${skin && skin==='solid' ? 'solid' : 'regular'}.svg`)
            dir.classList.remove('tree-dir-open-folder')
            arrow.classList.remove('tree-arrow-rotate-right')
            dir.classList.add('tree-dir-close-folder')
            arrow.classList.add('tree-arrow-rotate-left')
        } else {    // Open
            folderIcon.src = require(`./img/folder-open-${skin && skin==='solid' ? 'solid' : 'regular'}.svg`)
            dir.classList.remove('tree-dir-close-folder')
            arrow.classList.remove('tree-arrow-rotate-left')
            dir.classList.add('tree-dir-open-folder')
            arrow.classList.add('tree-arrow-rotate-right')
        }
        folder.isOpen = !folder.isOpen
    }
    console.log('directoryTree')
    const onNameClick = (event: React.ChangeEvent<HTMLInputElement>, data:NodeDataProps) => {
        if(nodeMenuBtn!==false){
            // Close open 3 dots btns
            const openDots = document.getElementsByClassName('tree-dir-open-dots')
            for(let i=0; i<openDots.length; i++){
                openDots[i].classList.remove('tree-dir-open-dots')
            }
            // Open 3 dots btn
            const dots = document.getElementById(`${data._id}+dots`)!
            dots.classList.toggle('tree-dir-open-dots')
        }
        onNodeClick({
            nodeData: data,
            nodeElement: event.target.parentElement?.children[1] as HTMLInputElement,
        })
    }

    const openNodeMenu = () => {
        // To-Do
        console.log('Menu')
    }

    return (
        <TreeView
            treeData={treeData}
            onNameClick={onNameClick}
            openFolder={openFolder}
            skin={skin}
            nodeMenuBtn={nodeMenuBtn}
            openNodeMenu={openNodeMenu}
        />
    )
}

export default DirectoryTree