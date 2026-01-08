/// <reference types="cypress" />

/*
https://www.npmjs.com/package/cypress-file-upload
npm install --save-dev cypress-file-upload
*/

describe('File Upload', () => {

    it('Single File Upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.wait(4000)

        const path1 = "bir.jpg"
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('include.text', 'bir.jpg')
        cy.get('#fileList > li').should('have.text', 'bir.jpg')
    })

    it('Multiple File Upload 1', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1 = "bir.jpg"
        const path2 = "iki.jpg"
        const path3 = "uc.jpg"
        cy.get('#filesToUpload')
        .attachFile(path1).wait(2000)
        .attachFile(path2).wait(2000)
        .attachFile(path3).wait(2000)
    })

    it('Multiple File Upload 2', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1 = "bir.jpg"
        const path2 = "iki.jpg"
        const path3 = "uc.jpg"
        cy.get('#filesToUpload').attachFile([path1, path2, path3])

        cy.get('#fileList > :nth-child(1)').should('have.text', 'bir.jpg')
        cy.get('#fileList > :nth-child(2)').should('contain.text', 'ki.jpg')
        cy.get('#fileList > :nth-child(3)').should('include.text', 'c.jpg')
    })

    it.only('OverWrite File Name', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1 = "bir.jpg"
        cy.get('#filesToUpload').attachFile({filePath: path1, fileName: 'image01.jpg'})
    })
})