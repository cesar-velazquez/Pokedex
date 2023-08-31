const paginateData = (items, currentPage) =>{
    //Cantidad de items por pagina 
    const ITEMS_PER_PAGE = 20;

    //LOS ITEMS de la pagina actual
    const sliceEnd = currentPage * ITEMS_PER_PAGE
    const sliceStart = sliceEnd - ITEMS_PER_PAGE
    const itemsInCurrentPage = items.slice(sliceStart, sliceEnd)

    //última pagina
    const lastPage = Math.ceil(items.length / ITEMS_PER_PAGE)

    //Bloque actual
    const PAGES_PER_BLOCK = 5
    const currentBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    //páginas que se van a mostrar en el bloque actual
    const pagesInCurrentBlock = []
    const maxPage = currentBlock * PAGES_PER_BLOCK
    const minPage = (maxPage - PAGES_PER_BLOCK) + 1
    for (let i = minPage; i <= maxPage; i++) {
        if (i <= lastPage) {
            pagesInCurrentBlock.push(i)
        }
        
    }
    return {
        itemsInCurrentPage,
        lastPage,
        pagesInCurrentBlock
    }
}
export {
    paginateData
}