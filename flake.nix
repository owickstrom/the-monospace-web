{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
  };

  outputs =
    {
      self,
      systems,
      nixpkgs,
    }:
    let
      eachSystem = nixpkgs.lib.genAttrs (import systems);
    in
    {
      devShells = eachSystem (
        system:
        let
          pkgs = (import nixpkgs { inherit system; });
        in
        {
          default = pkgs.mkShell {
            packages = [
              pkgs.live-server
              pkgs.pandoc
            ];
          };
        }
      );
    };
}
