import React, { useState } from 'react'
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
    color?: string,
    bgColor?: string,
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

const DirectoryTree = ({ treeData, onNodeClick, skin, color, nodeMenuBtn, bgColor }: Props) => {
    const nodeOptions = ['rename', 'delete', 'properties']
    
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
        for(let i of document.querySelectorAll('.node-option-model')){   // Close open options
            if(i instanceof HTMLElement) i.classList.remove('node-option-model')
        }
        if(nodeMenuBtn!==false){
            for(let i of document.querySelectorAll('.tree-dir-open-dots')){   // Close open 3 dots btns
                if(i instanceof HTMLElement && Number(i.dataset.id)!==data._id) i.classList.remove('tree-dir-open-dots')
            }
            document.getElementById(`${data._id}+dots`)!.classList.toggle('tree-dir-open-dots') // Open 3 dots btn
        }
        onNodeClick({
            nodeData: data,
            nodeElement: event.target.parentElement as HTMLInputElement,
        })
    }

    const openNodeMenu = (node: any) => {
        for(let i of document.querySelectorAll('.node-option-model')){   // Close open options
            if(i instanceof HTMLElement && Number(i.dataset.id)!==node._id) i.classList.remove('node-option-model')
        }
        const model = document.getElementById(`${node._id}-nodeOptions`)!
        if(node.children){
            model.innerHTML = `<option value="newfolder" style="text-transform: capitalize">New Folder</option>
                <option value="newfile" style="text-transform: capitalize">New File</option>`
            model.innerHTML += nodeOptions.map((i: string) => `<option value="${i}" style="text-transform: capitalize">${i}</option>`).join('')
        }else model.innerHTML = nodeOptions.map((i: string) => `<option value="${i}" style="text-transform: capitalize">${i}</option>`).join('')
        model.classList.toggle('node-option-model')
    }

    return (
        <TreeView
            treeData={treeData}
            onNameClick={onNameClick}
            openFolder={openFolder}
            skin={skin}
            color={color}
            bgColor={bgColor}
            nodeMenuBtn={nodeMenuBtn}
            openNodeMenu={openNodeMenu}
        />
    )
}

export default DirectoryTree