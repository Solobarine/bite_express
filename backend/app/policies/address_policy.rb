class AddressPolicy < ApplicationPolicy
  # NOTE: Up to Pundit v2.3.1, the inheritance was declared as
  # `Scope < Scope` rather than `Scope < ApplicationPolicy::Scope`.
  # In most cases the behavior will be identical, but if updating existing
  # code, beware of possible changes to the ancestors:
  # https://gist.github.com/Burgestrand/4b4bc22f31c8a95c425fc0e30d7ef1f5

  def initialize(entity, address)
    @entity = entity
    @address = address
  end

  def index?
    @entity.is_a?(User)
  end

  def create?
    @entity.is_a?(User)
  end

  def show?
    @entity === @address.user
  end

  def update?
    @entity === @address.user
  end

  def destroy?
    @entity === @address.user
  end

  class Scope < ApplicationPolicy::Scope
    # NOTE: Be explicit about which records you allow access to!
    # def resolve
    #   scope.all
    # end
  end
end
