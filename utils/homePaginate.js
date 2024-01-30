
  exports.pages = (firstCol, secondCol, thirdCol, page_no, page_items) => {
    const laptops = firstCol;  // array of laptops
    const accessories = secondCol;  // array of accessories
    const thirdCollection = thirdCol;  // array of mobiles
    const page_number = page_no;  //page number
    const items_per_page = page_items;
 
      const final = laptops.concat(thirdCollection, accessories);
      const page = page_no * 1 || 1;
      const limit = page_items * 1 || 100;
      const skip = (page - 1) * limit;
      
      // Apply pagination to the array
      const paginatedArray = final.slice(skip, skip + limit);
      return paginatedArray;
  
  }
  