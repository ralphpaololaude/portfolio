Gem::Specification.new do |spec|
  spec.name          = "portfolio"
  spec.version       = "0.1.0"
  spec.authors       = ["Your Name"]
  spec.email         = ["your.email@example.com"]
  spec.summary       = "Short summary"
  spec.description   = "Longer description"
  spec.homepage      = "https://github.com/ralphpaololaude/portfolio"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 3.2.2")
  
  spec.files         = Dir.glob("lib/**/*") + ["README.md"]
  spec.require_paths = ["lib"]
end
