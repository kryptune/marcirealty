export default function Location() {
  return (
    <div className="bg-white p-8 md:p-16">
      <h1 className="flex font-cinzel md:text-4xl text-3xl text-black justify-center mb-12">
        OUR LOCATION
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.272693170625!2d-115.95782812449566!3d36.18424937242895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1760884803535!5m2!1sen!2sph"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full md:h-[500px] h-[400px]"
      ></iframe>
    </div>
  );
}
