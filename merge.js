const mergePdfs=(async (p1,p2) => {
    // Dynamically import the ESM module in a CommonJS file
    const { default: PDFMerger } = await import('pdf-merger-js');
  
    const merger = new PDFMerger();
  
    try {
      await merger.add(p1);  // Merge all pages from '1.pdf'
      await merger.add(p2);  // Merge all pages from '2.pdf'
      let d=new Date().getTime()
      await merger.save(`public/${d}.pdf`);  // Save as 'merged.pdf'
      return d
    } catch (error) {
      console.error('Error during PDF merging:', error);
    }
  })

  module.exports={mergePdfs}
  