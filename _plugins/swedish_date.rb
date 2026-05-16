module Jekyll
  module SwedishDateFilter
    MONTHS = %w[januari februari mars april maj juni
                juli augusti september oktober november december]

    def swedish_date(date)
      d = date.is_a?(String) ? Date.parse(date) : date
      "#{d.day} #{MONTHS[d.month - 1]} #{d.year}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::SwedishDateFilter)