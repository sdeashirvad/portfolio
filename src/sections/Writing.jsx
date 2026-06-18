import { ArrowUpRight, Newspaper } from "lucide-react";
import { articles } from "@/data/writing";

export const Writing = () => {
  return (
    <section id="writing" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Engineering Writing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Thoughts on
            <span className="font-serif italic font-normal text-white">
              {" "}
              systems & scale.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Deep dives on distributed systems, idempotency, caching, and production backend engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article, idx) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl p-6 hover:border-primary/40 border border-border/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Newspaper className="w-5 h-5 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-xs text-primary font-medium mb-2">{article.date}</p>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {article.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-surface text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
