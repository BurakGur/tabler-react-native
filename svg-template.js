const template = (variables, { tpl }) => {
    return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = ({size = 24, stroke = 2, color = 'currentColor', ...props}: {size: number, stroke: number, color: string}) => (
  ${variables.jsx}
);

${variables.exports};
`
}

module.exports = template
