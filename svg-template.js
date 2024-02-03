const template = (variables, { tpl }) => {
    return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = ({size = 24, stroke = 2, ...props}: {size: number, stroke: number, props: SVGProps}) => (
  ${variables.jsx}
);

${variables.exports};
`
}

module.exports = template
