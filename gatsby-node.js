var path = require('path');

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

    const result = await graphql (`{
      allContentfulElectronics {
        nodes {
          slug
          title
          description {
            raw
          }
        }
      }
    }
    
    
    
    
    `)

    console.log(JSON.stringify(result));

    result.data.allContentfulElectronics.nodes.forEach((obj)=>{
        createPage({
            path: `/elect/${obj.slug}`,
            component: path.resolve('./src/template/elect.js'),
            context: {
                itemDetails: obj
            }
        })
    })
}






/*exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
      if (page.path.match(/^\/product/)) {
      page.matchPath = "/product/*"
      createPage(page)
    }
    else if (page.path.match(/^\/fruit/)) {
        page.matchPath = "/fruit/*"
        createPage(page)
      }
  }*/