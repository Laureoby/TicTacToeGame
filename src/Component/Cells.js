const Cell = ({id, cell, setCells, go, setGo, cells, winMsg}) => {
    
    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains('circle') || 
        e.target.firstChild.classList.contains('cross')

        if (!taken){
            if (go === 'circle'){
                e.target.firstChild.classList.add("circle")
                handleCellChange("circle")
                setGo('cross')
            }
            if (go === 'cross'){
                e.target.firstChild.classList.add("cross")
                handleCellChange("cross")
                setGo('circle')
            }
        }

        //refresh page after winning message
        if (winMsg){
            window.location.reload()
        }
    }

    const handleCellChange = (className) => {
        const nextCell =  cells.map((cell, index) => {
            if (index === id){
                return className
            }else{
                return cell
            }
        })
        setCells(nextCell)
    }

    return(
        <div className="square" id={id} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell