import { Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-semibold font-heading">
        Let&apos;s connect
      </h2>
      <p className="mt-4 text-muted-foreground">
        Whether you have a project in mind, want to collaborate, or just want to
        say hi, I&apos;ll try my best to get back to you!
      </p>

      <div className="mt-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <a
              href="mailto:ogedifavour2@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ogedifavour2@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-muted-foreground">Remote (Nigeria)</p>
            <Badge variant="secondary" className="mt-1 text-xs">
              Available worldwide
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
