interface BannerProps {
  title: string
}

export const Banner: React.FC<BannerProps> = ({ title }) =>
  !!title ? (
    <div className="rounded-t-lg-1 bg-primary pb-44 pt-22 text-white">
      <div className="container">
        <h1 className="block border-t border-cream pt-11">{title}</h1>
      </div>
    </div>
  ) : null
