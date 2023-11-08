const Resources = () => {
  const resources = [
    { title: 'Ebook: Introduction to React', category: 'Development', link: 'https://example.com/react.pdf' },
    { title: '10 Tools for Content Creation', category: 'Marketing', link: 'https://example.com/content-tools' },
    // Add more resources as needed
  ];

  return (
    <div className="max-w-7xl  mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Resources</h1>
      <div className="grid grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-2">{resource.category}</p>
            <a href={resource.link} className="text-blue-600 hover:underline">Download/View</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
