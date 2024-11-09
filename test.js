const splitPdf = require('@vtfk/pdf-splitter');

const pdfToSplit = {
    pdfPath: '1727016976480.pdf',
    ranges: ['1-4'],
    
};

(async () => {
    try {
        const result = await splitPdf(pdfToSplit);
        console.log(result);
    } catch (error) {
        console.error('Error splitting PDF:', error.message);
        console.error(error.stack);  // Log the stack for more details
    }
})();

